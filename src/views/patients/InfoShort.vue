<template>
    
    <div class="infoshort">
       <div v-if="newsItem.imgSrc" class="infoshort-image">
           <img :src="'/info_posters/' + newsItem.imgSrc">
       </div>

       <div class="infoshort-info">
           <div class="infoshort-info-upper">
               <div class="infoshort-info-phrase-date">
                   <div class="infoshort-phrase">
                       <h4>{{ newsItem.phrase }}</h4>
                   </div>
                   <div class="infoshort-date">
                       <h4>{{ newsItem.date }}</h4>
                   </div>
               </div>
               <div class="infoshort-title">
                   <h3>{{ newsItem.title }}</h3>
               </div>
           </div>
           <div class="infoshort-info-lower">
               <div class="infoshort-title">
                   <p>{{ newsItem.summary }}</p>
               </div>
           </div>
       </div>
   </div>
    
</template>

<script>
export default {
   props: ['newsItem']
}

</script>

<style>

.infoshort {
   width: 100%;
   display: flex;
   margin-bottom: 3rem;
   cursor: pointer;
}

.infoshort-title h3 {
   font-size: 1.18rem;
}

.infoshort-image {
   width: 40%;
   display: inline-block;
}

.infoshort-image img {
   display: block;
   margin-left: auto;
   margin-right: auto;
   max-width: 100%;
   height: auto;
}

.infoshort-info {
   width: 60%;
   display: inline-flex;
   flex-direction: column;
   justify-content: space-between;
   margin-left: 4%;
}

.infoshort-info-upper {
   width: 100%;
}

.infoshort-info-phrase-date {
   display: flex;
   justify-content: space-between;
}

.infoshort-info-phrase-date h4 {
   color: #969696
}

.infoshort-phrase {
   text-transform: uppercase;
}

.infoshort-info-lower {
   display: inline;
}

</style>