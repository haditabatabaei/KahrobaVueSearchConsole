<template>
  <main>
    <a role="button" @click.prevent="smoothScrollToTop()"
       class="btn btn-sm bg-success goUpBtn text-white">UP</a>
    <div id="headerSection" class="position-relative">
      <!-- Hero for FREE version -->
      <section class="section section-lg section-hero section-shaped">
        <!-- Background circles -->
        <div class="shape shape-style-1 shape-primary">
          <span class="span-150"></span>
          <span class="span-50"></span>
          <span class="span-50"></span>
          <!--<span class="span-75"></span>-->
          <span class="span-100"></span>
          <span class="span-75"></span>
          <span class="span-50"></span>
          <span class="span-100"></span>
          <span class="span-50"></span>
          <span class="span-100"></span>
        </div>

        <div class="container shape-container py-lg">
          <div class="row bg-white rounded shadow">

            <div class="col-md-6 px-0">
              <div class="row align-items-center justify-content-center">
                <apexchart width="500px" type="donut" :options="countryOptions" :series="countrySeries"></apexchart>
              </div>
            </div>

            <div class="col-md-6 px-0">
              <div class="row align-items-center justify-content-center">
                <apexchart width=500 type=bar :options="companyOptions" :series="companySeries"></apexchart>
              </div>
            </div>

            <div class="col-md-12 px-0">
              <div class="row align-items-center justify-content-center">
                <apexchart width="600" heigt="400px" type=bar :options="uniOptions" :series="uniSeries"></apexchart>
              </div>
            </div>
          </div>

        </div>

        <!-- SVG separator -->
        <div class="separator separator-bottom separator-skew zindex-100">
          <svg x="0" y="0" viewBox="0 0 2560 100" preserveAspectRatio="none" version="1.1"
               xmlns="http://www.w3.org/2000/svg">
            <polygon class="fill-white" points="2560 0 2560 100 0 100"></polygon>
          </svg>
        </div>
      </section>
    </div>
  </main>
</template>

<script>
  export default {
    name: "AnalysisResults",
    data: function () {
      return {
        countryOptions: {
          labels: ["USA", "Canada", "UK", "Germany", "Netherlands", "Australia", "Sweden"]
        },
        countrySeries: [2258, 1918, 268, 338, 193, 799, 208],

        uniSeries: [{
          data: [192, 19, 62, 14, 120, 9, 10]
        }],
        uniOptions: {
          plotOptions: {
            bar: {
              horizontal: true,
            }
          },
          dataLabels: {
            enabled: false
          },
          xaxis: {
            categories: ['British Columbia', 'University of Sydney', 'McGill University', 'Washington State University', 'University of Alberta', 'Massachusetts Institute of Technology', 'Stanford University'],
          }
        },
        companySeries: [{
          data: [26, 26, 16, 5, 17]
        }],
        companyOptions: {
          plotOptions: {
            bar: {
              horizontal: true,
            }
          },
          dataLabels: {
            enabled: false
          },
          xaxis: {
            categories: ["Google", "Microsoft", "Apple", "Nvidia", "Amazon"],
          }
        }
      }
    },
    mounted() {
      window.console.log('analysis component mounted')
    }
    ,
    components: {}
  }
</script>

<style scoped>
  span.apexcharts-legend-text {
    color: white !important;
  }
</style>
