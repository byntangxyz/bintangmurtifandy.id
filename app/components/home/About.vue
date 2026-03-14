<template>
  <section>
    <Motion
      as="div"
      class="bg-blue-950/40 border border-white/10 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center gap-8"
      :initial="{ opacity: 0, y: 44 }"
      :whileInView="{ opacity: 1, y: 0 }"
      :viewport="{ once: true, margin: '-80px' }"
      :transition="{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }"
    >
      <div class="flex-1 flex flex-col gap-4">
        <p class="font-pjs text-blue-400 text-sm tracking-widest uppercase">
          A bit about me
        </p>
        <h2 class="font-pixel text-3xl md:text-4xl font-bold uppercase">
          >_ Sudo Who I Am
        </h2>
        <p class="font-inter text-base text-white/50 leading-relaxed max-w-lg">
          My name is Bintang Murtifandy, a Fullstack web developer who is
          currently studying the about Networking and
          Infrastructure. Let's connect and sharing ideas!
        </p>
        <UButton
          to="/about"
          color="neutral"
          variant="outline"
          class="font-pjs w-fit"
          trailing-icon="i-lucide-arrow-right"
        >
          More About Me
        </UButton>
      </div>

      <div
        class="font-pixel font-bold uppercase leading-none select-none hidden md:flex flex-col items-end gap-0"
      >
        <span class="text-8xl text-blue-500/15">Web</span>
        <span class="text-8xl text-blue-400/25">Dev</span>
      </div>
    </Motion>
  </section>
</template>
