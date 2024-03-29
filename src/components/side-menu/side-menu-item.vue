<template>
  <div
    class="side-menu-item"
    :class="type && `side-menu-item--${type}`"
    :style="style"
  >
    <el-tooltip
      :disabled="!tooltip"
      :content="tooltip"
      :tabindex="isDisabled ? -1 : 0"
      effect="dark"
      placement="right"
    >
      <button
        v-if="type === 'exit'"
        type="submit"
        :aria-label="tooltip || label"
        class="side-menu-item__control"
      >
        <span
          v-if="svg"
          class="side-menu-item__icon"
          v-html="svg"
        ></span>
        <slot></slot>
      </button>

      <a
        v-else-if="type === 'link' && !isDisabled"
        :aria-label="tooltip || label"
        :href="to"
        target="_blank"
        class="side-menu-item__control"
      >
        <span
          v-if="svg"
          class="side-menu-item__icon"
          v-html="svg"
        ></span>
        <slot></slot>
      </a>

      <router-link
        v-else
        :aria-label="tooltip || label"
        :disabled="isDisabled"
        :tag="computedTag"
        :to="to || '/'"
        class="side-menu-item__control"
      >
        <span
          v-if="type === 'logo' || svg"
          class="side-menu-item__icon"
          v-html="svg"
        ></span>
        <slot></slot>
        <span
          v-if="type === 'logo'"
          class="side-menu-item__label"
        >{{ label }}</span>
      </router-link>
    </el-tooltip>
  </div>
</template>

<script>
export default {
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    icon: {
      type: String,
      default: '',
    },
    label: {
      type: String,
      default: '',
    },
    logoUrl: {
      type: String,
      default: '',
    },
    to: {
      type: [String, Object],
      default: undefined,
    },
    tooltip: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: '',
    },
  },
  computed: {
    isDisabled () {
      return this.disabled || !this.to;
    },
    computedTag () {
      return this.isDisabled ? 'button' : 'a';
    },
    svg () {
      if (!this.icon) return '';
      return `<svg><use xlink:href="
          #${this.icon}"
        ></use></svg>`;
    },
    style () {
      if (!this.logoUrl || this.type !== 'logo') return '';
      return `--logo-url: url(${this.logoUrl})`;
    },
  },
};
</script>

<style src="./side-menu-item.css"></style>
