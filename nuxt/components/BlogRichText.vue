  <!-- components/BlogRichText.vue -->
<template>
  <div class="rich-text">
    <template v-for="(block, index) in blocks" :key="index">
      <!-- Paragraph -->
      <p v-if="block.type === 'paragraph'" class="my-4">
        <span
          v-for="(child, childIndex) in block.children"
          :key="childIndex"
          :class="{ 'font-weight-bold': child.bold }"
        >
          {{ child.text }}
        </span>
      </p>

      <!-- Heading -->
      <component
        :is="`h${block.level || 4}`"
        v-else-if="block.type === 'heading'"
        class="my-4"
      >
        <span
          v-for="(child, childIndex) in block.children"
          :key="childIndex"
          :class="{ 'font-weight-bold': child.bold }"
        >
          {{ child.text }}
        </span>
      </component>

      <!-- Image -->
      <v-img
        v-else-if="block.type === 'image'"
        :src="block.image?.url"
        :alt="block.image?.alternativeText || ''"
        class="article-image my-4"
        :width="block.image?.width"
        :height="block.image?.height"
      />

      <!-- Quote -->
      <v-blockquote
        v-else-if="block.type === 'quote'"
        class="grey--text text--darken-1 v-blockquote"
      >
        <div class="quote-content">
          <span
            v-for="(child, childIndex) in block.children"
            :key="childIndex"
            :class="{ 'font-weight-bold': child.bold }"
          >
            {{ child.text }}
          </span>
        </div>
      </v-blockquote>

      <!-- Code -->
      <v-card
        v-else-if="block.type === 'code' && block.language === 'html'"
        class="my-4 pa-4 code-html"
        color="#f5f5f5"
        elevation="2"
        style="position: relative;"
      >
        <!-- SVG Icon -->
        <div style="color: #ff0000; position: absolute; top: 18px; left: 8px;">
          <svg width="24" height="24" role="img" style="enable-background: new 0 0 24 24;">
            <circle cx="12.125" cy="12.125" r="12" style="fill: currentColor;"></circle>
            <path d="M10.922 6.486c0-.728.406-1.091 1.217-1.091s1.215.363 1.215 1.091c0 .347-.102.617-.304.81-.202.193-.507.289-.911.289-.811 0-1.217-.366-1.217-1.099zm2.33 11.306h-2.234V9.604h2.234v8.188z" style="fill: #fff;"></path>
          </svg>
        </div>
        <!-- Code Content with Padding -->
        <div v-html="block.children[0]?.text" style="padding-left: 40px;"></div>
      </v-card>

      <!-- Fallback for Unknown Types -->
      <div v-else class="my-4 red--text">
        Unsupported block type: {{ block.type }} {{ block.language }}
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  blocks: Array<{
    type: string;
    level?: number;
    children: Array<{
      type: string;
      text: string;
      bold?: boolean;
    }>;
    image?: {
      name: string;
      url: string;
      alternativeText: string | null;
      caption: string | null;
      width: number;
      height: number;
      formats?: {
        thumbnail?: { url: string };
        small?: { url: string };
        medium?: { url: string };
        large?: { url: string };
      };
    };
    language?: string;
  }>;
}>();
</script>

<style lang="scss" scoped>
.rich-text {
  font-family: 'Helvetica';
    color: #ffffff;
    font-weight: 400;
    font-size: 16px;
    justify-content: center;
    text-align: center;
    letter-spacing: 0.1em;
    padding: 0  25%;

  h3 {
    font-family: 'Gilroy', Arial, sans-serif;
    font-size: 22px;
    font-weight: 700;
    margin-top: 32px !important;
    margin-bottom: 12px !important;
  }

  p {
    margin-bottom: 1rem;
  }

  img,
  pre,
  table,
  code {
    max-width: 100%;
    box-sizing: border-box;
    overflow-x: auto;
  }

  img,
  .article-image {
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
}

.v-blockquote {
  position: relative;
  color: rgba(0, 0, 0, 0.6);
}

.v-blockquote::before {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 3px;
  background-color: #0d0d28;
}

.quote-content {
  display: block;
  min-height: auto;
  margin: 0;
  padding-left: 16px;
}

.code-html ul {
  margin-left: 116px !important;
}

</style>