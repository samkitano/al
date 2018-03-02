import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Bio from '@/components/Bio'
import Galeria from '@/components/Galeria'
import Livros from '@/components/Livros'
import Revistas from '@/components/Revistas'
import Artigos from '@/components/Artigos'
import Entrevistas from '@/components/Entrevistas'
import PontosComVista from '@/components/PontosComVista'
import OsegredoDeNatalia from '@/components/OsegredoDeNatalia'
import Mdsp from '@/components/MemoriasDistanciasSonhosProximidades'
import FbioOlgaRoriz from '@/components/FotobiografiaDeOlgaRoriz'
import FbioLuisaTaveira from '@/components/FotobiografiaDeLuisaTaveira'
import DancaramEmLisboa from '@/components/DancaramEmLisboa'
import PaLi from '@/components/PortugalNasArtesNasLetrasEnasIdeias45–95'
import PageNotFound from '@/components/404'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Hello
    },
    {
      path: '/bio',
      name: 'Bio',
      component: Bio
    },
    {
      path: '/galeria',
      name: 'Galeria',
      component: Galeria
    },
    {
      path: '/livros',
      name: 'Livros',
      component: Livros
    },
    {
      path: '/livros/pontos-com-vista',
      name: 'Pontos com vista',
      component: PontosComVista
    },
    {
      path: '/livros/o-segredo-de-natalia',
      name: 'O segredo de Natalia',
      component: OsegredoDeNatalia
    },
    {
      path: '/livros/memorias-distancias-sonhos-proximidades',
      name: 'Memórias, Distâncias, Sonhos, Proximidades',
      component: Mdsp
    },
    {
      path: '/livros/fotobiografia-de-olga-roriz',
      name: 'Fotobiografia de Olga Roriz',
      component: FbioOlgaRoriz
    },
    {
      path: '/livros/fotobiografia-de-luisa-taveira',
      name: 'Fotobiografia de Luísa Taveira',
      component: FbioLuisaTaveira
    },
    {
      path: '/livros/dancaram-em-lisboa',
      name: 'Dançaram em Lisboa',
      component: DancaramEmLisboa
    },
    {
      path: '/livros/portugal-nas-artes-nas-letras-e-nas-ideias-45-95',
      name: 'Portugal nas Artes, nas Letras e nas Ideias 45 – 95',
      component: PaLi
    },
    {
      path: '/revistas',
      name: 'Revistas',
      component: Revistas
    },
    {
      path: '/artigos',
      name: 'Artigos',
      component: Artigos
    },
    {
      path: '/entrevistas',
      name: 'Entrevistas',
      component: Entrevistas
    },
    {
      path: '*',
      name: '404',
      component: PageNotFound
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})
