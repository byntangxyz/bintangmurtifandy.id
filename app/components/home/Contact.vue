<template>
  <section>
    <Motion
      as="div"
      class="text-center flex flex-col items-center gap-6"
      :initial="{ opacity: 0, y: 44 }"
      :whileInView="{ opacity: 1, y: 0 }"
      :viewport="{ once: true, margin: '-80px' }"
      :transition="{ duration: 0.65, ease: 'easeOut' }"
    >
      <p class="font-pjs text-blue-400 text-sm tracking-widest uppercase">
        Let's work together
      </p>
      <h2
        class="font-pixel text-4xl md:text-6xl font-bold uppercase leading-tight"
      >
        Get In<br /><span class="text-blue-400">Touch</span>
      </h2>
      <p class="font-inter text-base text-white/50 max-w-md leading-relaxed">
        Want's some chitchat? or just want to say hello? Let's talk and connect!
      </p>
      <div class="flex flex-wrap justify-center gap-4 pt-2">
        <UButton
          to="/contact"
          size="xl"
          color="neutral"
          class="font-pjs"
          trailing-icon="i-lucide-link"
        >
          Contact Me
        </UButton>
        <UButton
          to="https://github.com/byntangxyz"
          target="_blank"
          size="xl"
          color="neutral"
          variant="outline"
          class="font-pjs"
          leading-icon="i-simple-icons-github"
        >
          GitHub
        </UButton>
      </div>
    </Motion>
  </section>
</template>
