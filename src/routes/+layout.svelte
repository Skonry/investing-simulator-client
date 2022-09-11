<script>
  import "carbon-components-svelte/css/g100.css";

  import {
    Header,
    HeaderNav,
    HeaderNavItem,
    SkipToContent,
  } from "carbon-components-svelte";

  export const ssr = false;
</script>

<Header platformName="Investing Simulator">
  <svelte:fragment slot="skip-to-content">
    <SkipToContent />
  </svelte:fragment>
  <HeaderNav>
    <HeaderNavItem href="/" text="Home" />
    <HeaderNavItem href="/registration" text="Registration" />
    <HeaderNavItem href="/instruments" text="Instruments" />
    <HeaderNavItem href="/portfolio" text="Portfolio" />
  </HeaderNav>
</Header>

<slot />
