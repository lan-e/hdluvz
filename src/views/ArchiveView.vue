<template>
  <div class="page">
    <div class="archive-container">
      <h1>{{ $t("archivePage") }}</h1>
      <h3>Stručni kriteriji</h3>
      prema kojima HDLU Varaždin daje preporuke  i potporu  svojim  članovima kod ostvarivanja prava samostalnih
      umjetnika ili  kod mjera za poticanje kulturnog i umjetničkog stvaralaštva.
      Stručni kriteriji usuglašeni su s Ministarstvom kulture i medija i njima članovi dokazuju da profesionalno
      obavljaju umjetničku djelatnost.
       
      <ul>
        <h4>Slikar</h4>
        <li>a)  3 samostalne izložbe</li>
        <li>b)  5 skupnih žiriranih izložbi ili</li>
        <li>c)  2 samostalne izložbe i 2 skupne žirirane izložbe.</li>

        <h4>Multimedijalni umjetnik</h4>
        <li>a)  3 samostalna multimedijalna projekta</li>
        <li>b)  5 skupnih multimedijalnih projekata,</li>
        <li>c)  2 samostalna i 2 skupna multimedijalna projekta ili</li>
        <li>d)  5 skupnih žiriranih izložbi.</li>
        Pod multimedijalnim projektom podrazumijeva se video, film, računalna umjetnost, performans i drugi oblici
        suvremenog umjetničkog izražavanja.

         <h4>Kipar</h4>
        <li>a)  3 samostalne izložbe</li>
        <li>b)  5 skupnih žiriranih izložbi</li>
        <li>c)  1 samostalna izložba i 4 skupne žirirane izložbe ili</li>
        <li>d)  2 samostalne izložbe i 2 skupne žirirane izložbe.</li>


        <li>-  Izložbe se priznaju ako su izlagana različita umjetnička djela.</li>
        <li>-  Izložbe se priznaju ako su realizirane u istaknutim institucijama ili iz
          ložbenim prostorima na području
          Republike Hrvatske.
        </li>
        <li>-  Umjetnička djela ostvarena izvan istaknutih institucija i izložbenih prostora priznaju se ako
          predstavljaju
          doprinos hrvatskoj kulturi i umjetnosti.</li>
      </ul>
      <h3>Preuzmi</h3>
      <div class="btns">
        <a href="src/documents/2021_03_01_Strucni_kriteriji.docx" download><button>Stručni kriteriji</button></a>
        <a href="src/documents/2019_09_12_statut_hdlu_varazdin.doc" download><button>Statut</button></a>
      </div>
    </div>
    <div id="contact">
      <Footer />
    </div>
  </div>
</template>

<script setup>
import Footer from '@/components/Footer.vue';
</script>