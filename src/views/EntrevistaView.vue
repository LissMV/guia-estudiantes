<template>
<h1 class="font-coiny text-4xl text-center mt-10">Entrevista a una estudiante de 4° año</h1>
  <div class="video-container">
    <iframe
      class="video"
      src="https://www.youtube.com/embed/q4HW_ZTMgXs"
      title="Entrevista COE"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen
    >
    </iframe>
  </div>
</template>

<style scoped>
.video-container {
  display: flex;
  justify-content: center;
  padding: 2rem;
}

.video {
  width: 100%;
  max-width: 900px;
  aspect-ratio: 16 / 9;
  border: none;
  border-radius: 12px;
}
</style>
