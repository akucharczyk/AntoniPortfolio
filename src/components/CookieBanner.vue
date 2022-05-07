<template>
  <TransitionRoot appear :show="showBanner && !infoDialogOpen" as="template">
    <Dialog as="div" class="relative z-10">
      <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0" enter-to="opacity-100"
        leave="duration-200 ease-in" leave-from="opacity-100" leave-to="opacity-0">
        <div class="fixed inset-0 bg-black bg-opacity-25" />
      </TransitionChild>

      <div class="fixed inset-x-0 sm:right-auto bottom-0 sm:left-2 sm:bottom-2 overflow-y-auto">
        <div class="flex min-h-full items-center justify-center p-4 text-center">
          <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100" leave="duration-200 ease-in" leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95">
            <DialogPanel
              class="w-full max-w-md transform overflow-hidden rounded-2xl bg-slate-800 p-6 text-left align-middle shadow-xl transition-all">
              <DialogTitle as="h3" class="text-lg font-medium leading-6 text-gray-100">
                Cookies & Data privacy
              </DialogTitle>
              <div class="mt-2">
                <p class="text-sm text-gray-200">
                  We only use our own cookies and technologies to offer you the best possible experience on our website.
                  You can find more information in our data protection declaration.
                </p>
              </div>

              <div class="mt-4 gap-2 flex">
                <button type="button"
                  class="inline-flex justify-center rounded-md border border-green-500 px-4 py-2 text-sm font-medium text-green-500 hover:bg-green-200/10 focus:outline-none transition-colors"
                  @click="okClicked">
                  Got it, thanks!
                </button>
                <button type="button"
                  class="inline-flex justify-center rounded-md border border-red-500 px-4 py-2 text-sm font-medium text-red-500 hover:bg-red-200/10 focus:outline-none transition-colors"
                  @click="infoDialogOpen = !infoDialogOpen">
                  More information!
                </button>
                <button type="button" class="flex-1 text-gray-400 text-end flex-end"
                  @click="dismissClicked">
                  No, thanks!
                </button>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
  <TransitionRoot appear :show="infoDialogOpen" as="template">
    <Dialog as="div" class="relative z-10" @close="infoDialogOpen = !infoDialogOpen">
      <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0" enter-to="opacity-100"
        leave="duration-200 ease-in" leave-from="opacity-100" leave-to="opacity-0">
        <div class="fixed inset-0 bg-black bg-opacity-25" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-y-auto">
        <div class="flex min-h-full items-center justify-center p-4 text-center">
          <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100" leave="duration-200 ease-in" leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95">
            <DialogPanel
              class="w-full max-w-2xl transform overflow-hidden rounded-2xl bg-slate-800 p-6 text-left align-middle shadow-xl transition-all mt-20 sm:mt-0">
              <DialogTitle as="h3" class="text-xl font-medium leading-6 text-gray-100">
                Datenschutz
              </DialogTitle>
              <div class="mt-2 text-gray-100">
                Beim Besuch unserer Website kann Ihr Surf-Verhalten zudem statistisch ausgewertet werden. Das geschieht
                vor allem mit Cookies und mit sogenannten Analyseprogrammen. Die Analyse Ihres Surf-Verhaltens erfolgt
                in der Regel anonym; das Surf-Verhalten kann nicht zu Ihnen zurückverfolgt werden.

                Diese Website nutzt dafür den Dienst „Google Analytics“, der von der Google LLC (1600 Amphitheatre
                Parkway Mountain View, CA 94043, USA) angeboten wird. Zuständiger Dienstanbieter in der EU ist die
                Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland („Google“). Das Tracking und die
                Analyse der Daten findet erst statt, nachdem Sie unsere Cookie- & Datenschutzeinstellungen akzeptiert
                haben. Der Dienst verwendet „Cookies“ – Textdateien, welche auf Ihrem Endgerät gespeichert werden. Die
                durch die Cookies gesammelten Informationen werden im Regelfall an einen Google-Server in den USA
                gesandt und dort gespeichert.

                Wir nutzen die Funktion ‘anonymizeIP’ (sog. IP-Masking), das wir vorstehend näher beschrieben haben. Nur
                in Ausnahmefällen werden vollständige Angaben zu der IP-Adresse des Nutzers an einen Server von Google
                in den USA übertragen und dort gekürzt. Die im Rahmen von Google Analytics von Ihrem Browser
                übermittelte IP-Adresse wird nicht mit anderen Daten von Google zusammengeführt.

                Bei dem Besuch unserer Internetseite werden die aufgerufenen Seiten, die Referrer-URL, von der unsere
                Seite aufgerufen wurde, der Klickpfad, das Aufrufen bestimmter Funktionen (Conversions, z.B.
                Newsletter-Anmeldungen, Downloads, Käufe), das Nutzerverhalten (beispielsweise Klicks, Verweildauer,
                Absprungraten), der ungefähre Standort (Region), die gekürzte IP-Adresse, der Internetanbieter,
                technische Informationen zu dem Browser und den genutzten Endgeräten (z.B. Spracheinstellung,
                Bildschirmauflösung),

                Wenn Sie eine Verarbeitung der Daten durch Google nicht wünschen, sollten Sie die Einwilligung zur
                Nutzung von Cookies nicht erteilen oder ein Browser-Add-on zur Deaktivierung von Google Analytics
                nutzen. Außerdem wird die Verarbeitung verhindert, wenn Sie die Speicherung von Cookies durch
                entsprechende Browsereinstellung verhindern. In diesem Fall kann es aber zu Einschränkungen der
                Funktionen auf unserer und anderen Internetseiten kommen.

                Nähere Informationen zu Nutzungsbedingungen von Google Analytics und zum Datenschutz bei Google finden
                Sie unter https://marketingplatform.google.com/about/analytics/terms/de/ und unter
                https://policies.google.com/?hl=de.



              <div class="mt-4 gap-2 flex">
                <button type="button"
                  class="inline-flex justify-center rounded-md border border-red-500 px-4 py-2 text-sm font-medium text-red-500 hover:bg-red-200/10 focus:outline-none transition-colors"
                  @click="infoDialogOpen = !infoDialogOpen"
                >
                  Close
                </button>
              </div>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup lang="ts">
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle,
} from '@headlessui/vue'
import useCookies from '../useCookies'
import { inject, ref } from 'vue'

const gtag = inject<any>('gtag')
const { showBanner, okClicked, dismissClicked } = useCookies(gtag)
const infoDialogOpen = ref(false)
</script>
