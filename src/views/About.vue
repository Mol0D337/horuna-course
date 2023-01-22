<template>
  <div class="bcg" data-view>
    <div class="blob"></div>
    <Header />
    <MainBlock />
    <Trailer />
    <Course class="desktop"/>
    <Info />
    <Pack />
    <Demo />
    <Faq />
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header";
import MainBlock from "@/components/MainBlock";
import Trailer from "@/components/Trailer";
import Course from "@/components/Course";
import Footer from "@/components/Footer";
import Info from "@/components/Info";
import Pack from "@/components/Pack";
import Demo from "@/components/Demo";
import Faq from "@/components/Faq";
export default {
  name: "About",
  components: {Faq, Demo, Pack, Info, Footer, Header, MainBlock, Trailer, Course}
}
</script>
