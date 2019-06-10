<template>
    <!--<h1>Home Dir</h1>-->
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

                <div class="container shape-container d-flex align-items-center py-lg">
                    <div class="col-md-12 px-0">
                        <div class="row align-items-center justify-content-center">
                            <div class="col-lg-12 text-center">
                                <div class="row">
                                    <div class="col-md-12 titleColumn">
                                        <h3 class="text-white isansFont">
                                            نرم افزار کاربردی جمع آوری و استخراج اطلاعات دانشجویان مهاجر خزشگر
                                        </h3>
                                    </div>
                                    <br>
                                    <br>
                                    <br>
                                    <br>
                                    <div class="col-md-6">
                                        <!--<img src=   "" style="width: 200px;" class="img-fluid">-->
                                        <h4 class="lead text-white isansFont">
                                            Search Console
                                        </h4>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <div class="input-group input-group-alternative mb-4">
                                                        <div class="input-group-prepend">
                                                                <span class="input-group-text"><i
                                                                        class="ni ni-circle-08"></i></span>
                                                        </div>
                                                        <input class="form-control form-control-alternative"
                                                               placeholder="Name" type="text"
                                                               v-model="inputData.name">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <div class="input-group input-group-alternative mb-4">
                                                        <div class="input-group-prepend">
                                                                <span class="input-group-text"><i
                                                                        class="ni ni-books"></i></span>
                                                        </div>
                                                        <input class="form-control form-control-alternative"
                                                               placeholder="Research Field" type="text"
                                                               v-model="inputData.researchField">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row" v-if="advanceSearchIsShown">
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <div class="input-group input-group-alternative mb-4">
                                                        <div class="input-group-prepend">
                                                                <span class="input-group-text"><i
                                                                        class="ni ni-hat-3"></i></span>
                                                        </div>
                                                        <input class="form-control form-control-alternative"
                                                               placeholder="University" type="text"
                                                               v-model="inputData.university">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <div class="input-group input-group-alternative mb-4">
                                                        <div class="input-group-prepend">
                                                                <span class="input-group-text"><i
                                                                        class="ni ni-single-copy-04"></i></span>
                                                        </div>
                                                        <input class="form-control form-control-alternative"
                                                               placeholder="Journal" type="text"
                                                               v-model="inputData.journal">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <h4 class="lead text-white isansFont">
                                            Options
                                        </h4>

                                        <div class="custom-control custom-checkbox mb-3">
                                            <input class="custom-control-input" id="customCheck2" type="checkbox"
                                                   checked="" v-model="optionsFlag.emailOnly">
                                            <label class="custom-control-label text-white" for="customCheck2">With
                                                email only!</label>
                                        </div>

                                        <div class="custom-control custom-checkbox mb-3">
                                            <input class="custom-control-input" id="customCheck3" type="checkbox"
                                                   checked="" v-model="optionsFlag.teacherOnly">
                                            <label class="custom-control-label text-white" for="customCheck3">Professor/Assistant
                                                Professors Only!</label>
                                        </div>

                                        <label for="countryFilter" class="text-white">Filter by country :</label>
                                        <br>
                                        <select name="countryFilter" id="countryFilter"
                                                v-model="optionsFlag.selectedCountry">
                                            <option disabled value="">Select you country :</option>
                                            <option value="all">All Countries</option>
                                            <option value="usa">United States of America</option>
                                            <option value="canada">Canada</option>
                                            <option value="uk">United Kingdom</option>
                                            <option value="germany">Germany</option>
                                            <option value="netherlands">Netherlands</option>
                                            <option value="australia">Australia</option>
                                            <option value="sweden">Sweden</option>
                                        </select>
                                        <!--<span>Selected: {{ selected }}</span>-->

                                    </div>
                                </div>


                                <!--<form @submit.prevent="search()">-->
                                <div class="row justify-content-center">
                                    <div class="btn-wrapper mt-5">
                                        <button @click.prevent="search()"
                                                class="btn btn-lg btn-success btn-icon mb-3 mb-sm-0 normalFontWeight">
                                            Start Searching
                                        </button>
                                    </div>
                                </div>

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


        <!-- Result Table -->
        <div class="row justify-content-center">
            <div class="col-md-12 text-center   ">
                <h2 class="text-primary text-center" id="resultTable" v-if="this.searchNum > 0">
                    Search Result(s) : {{'[ ' + searchResultProfiles.length + ' items ]'}}
                </h2>
                <h2 class="text-primary text-center" id="resultTable" v-else="this.searchNum > 0">
                    Search Result(s) : {{'[]'}}
                </h2>
                <download-excel
                        class="btn btn-info exportBtn"
                        :data="this.exportedJsonProfiles"
                        :name="'KhazeshgarExportResultBySneeds.ir-'+ Date() + '.xls'"
                        v-if="this.isExportBtnActive"
                >
                    Export Search Results
                </download-excel>
            </div>
            <div class="col-md-10">
                <div class="table-responsive">
                    <table class="table table-hover table-striped " id="resultTableView">
                        <thead class="bg-info text-white">
                        <tr class="text-center">
                            <th>#</th>
                            <th>Full Name</th>
                            <th>Email</th>
                            <th>Country</th>
                            <th>Action</th>
                        </tr>
                        </thead>
                        <tbody v-if="shownProfiles.length > 0">
                        <tr v-for="profile in shownProfiles" class="text-center">
                            <th>{{searchResultProfiles.indexOf(profile) + 1}}</th>
                            <th>{{profile["name"]}}</th>
                            <th>{{profile["email"]}}</th>
                            <th>{{profile["country"]}}</th>
                            <th>
                                <router-link :to="'/profile/index/' + profile.index"
                                             class="btn btn-sm btn-outline-success">
                                    show
                                    profile
                                </router-link>
                            </th>
                        </tr>
                        </tbody>
                        <tfoot>

                        </tfoot>
                    </table>
                </div>
            </div>

            <!--- Pagination -->
            <div class="col-md-10">
                <nav aria-label="Page navigation example">
                    <ul class="pagination justify-content-center">
                        <li class="page-item" v-if="pagination.currentPage != 1">
                            <a class="page-link" role="button" @click.prevent="goPrevPage()">
                                <i class="fa fa-angle-left"></i>
                                <span class="sr-only">Previous</span>
                            </a>
                        </li>

                        <li class="page-item" :class="{'active' : pagination.currentPage == pageNumber}"
                            v-for="pageNumber in pagination.numberOfPages" :key="pageNumber"
                            v-if="(pageNumber - pagination.currentPage) <= 5 && (pageNumber - pagination.currentPage >= -5)">
                            <a role="button" class="page-link"
                               @click.prevent="changeCurrentPageNumber(pageNumber)">{{pageNumber}}</a></li>

                        <li class="page-item"
                            v-if="pagination.currentPage != pagination.numberOfPages && pagination.numberOfPages > 0">
                            <a class="page-link" role="button" @click.prevent="goNextPage()">
                                <i class="fa fa-angle-right"></i>
                                <span class="sr-only">Next</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </main>
</template>

<script>
    // @ is an alias to /src

    export default {
        name: 'home',
        data: function () {
            return {
                shownProfiles: [],
                searchResultProfiles: [],
                advanceSearchIsShown: true,
                isExportBtnActive: false,
                valueOfScrollY: null,
                inputData: {
                    name: null,
                    researchField: null,
                    university: null,
                    journal: null,
                },
                optionsFlag: {
                    emailOnly: false,
                    teacherOnly: false,
                    selectedCountry: 'all',
                },
                pagination: {
                    numberOfItemsPerPage: 15,
                    numberOfPages: 0,
                    currentPage: 1,
                },
                searchNum: 0,

            }
        },
        methods: {
            searchByName: function () {
                if (!(this.inputData.name == null || this.inputData.name.length == 0)) {
                    let tempResult = [];
                    for (let i = 0; i < this.searchResultProfiles.length; i++) {
                        if (this.searchResultProfiles[i]["name"].toLowerCase().includes(this.inputData.name.toLowerCase())) {
                            tempResult.push(this.searchResultProfiles[i]);
                        }
                    }
                    this.searchResultProfiles = tempResult;
                }
            },
            searchByField: function () {
                if (!(this.inputData.researchField == null || this.inputData.researchField.length == 0)) {
                    let tempResult = [];
                    let findInUni = false, findInJournal = false, findInExperience = false;
                    for (let i = 0; i < this.searchResultProfiles.length && !(findInUni || findInJournal || findInExperience); i++) {
                        for (let j = 0; j < this.searchResultProfiles[i]["universities"].length; i++) {
                            if (this.searchResultProfiles[i]["universities"][j]["field of study"].toLowerCase().includes(this.inputData.researchField.toLowerCase())) {
                                tempResult.push(this.searchResultProfiles[i]);
                                findInUni = true;
                            }
                        }

                        if (!findInJournal) {
                            for (let j = 0; j < this.searchResultProfiles[i]["journals"].length; j++) {
                                if (this.searchResultProfiles[i]["journals"][j]["title"].toLowerCase().includes(this.inputData.researchField.toLowerCase())) {
                                    tempResult.push(this.searchResultProfiles[i]);
                                    findInJournal = true;
                                }
                            }
                        }

                        if (!findInExperience) {
                            for (let j = 0; j < this.searchResultProfiles[i]["experiences"].length; j++) {
                                if (this.searchResultProfiles[i]["experiences"][j]["title"].toLowerCase().includes(this.inputData.researchField.toLowerCase())) {
                                    tempResult.push(this.searchResultProfiles[i]);
                                    findInExperience = true;
                                }
                            }
                        }

                    }
                    this.searchResultProfiles = tempResult;
                }
            },
            searchByCountry: function () {
                let tempResult = [];
                if (this.optionsFlag.selectedCountry != 'all') {
                    for (let i = 0; i < this.searchResultProfiles.length; i++) {
                        if (this.searchResultProfiles[i]["country"].toLowerCase().includes(this.optionsFlag.selectedCountry.toLowerCase())) {
                            tempResult.push(this.searchResultProfiles[i]);
                        }
                    }
                    this.searchResultProfiles = tempResult;
                }
            },
            searchByUniversity: function () {
                if (!(this.inputData.university == null || this.inputData.university.length == 0)) {
                    let tempResult = [];
                    for (let i = 0; i < this.searchResultProfiles.length; i++) {
                        for (let j = 0; j < this.searchResultProfiles[i]["universities"].length; j++) {
                            if (this.searchResultProfiles[i]["universities"][j]["name"].toLowerCase().includes(this.inputData.university.toLowerCase())) {
                                tempResult.push(this.searchResultProfiles[i]);
                                break;
                            }
                        }
                    }
                    this.searchResultProfiles = tempResult;
                }

            },
            searchByJournal: function () {
                if (!(this.inputData.journal == null || this.inputData.journal.length == 0)) {
                    let tempResult = [];
                    for (let i = 0; i < this.searchResultProfiles.length; i++) {
                        for (let j = 0; j < this.searchResultProfiles[i]["journals"].length; j++) {
                            if (this.searchResultProfiles[i]["journals"][j]["title"].toLowerCase().includes(this.inputData.journal.toLowerCase())) {
                                tempResult.push(this.searchResultProfiles[i]);
                                break;
                            }
                        }
                    }
                    this.searchResultProfiles = tempResult;
                }
            },
            teacherFlagSearch: function () {
                let tempResult = [];
                if (this.optionsFlag.teacherOnly) {
                    for (let i = 0; i < this.searchResultProfiles.length; i++) {
                        if (this.searchResultProfiles[i]["isTeacher"]) {
                            tempResult.push(this.searchResultProfiles[i]);
                        }
                    }
                    this.searchResultProfiles = tempResult;
                }
            },
            emailFlagSearch: function () {
                let tempResult = [];
                if (this.optionsFlag.emailOnly) {
                    for (let i = 0; i < this.searchResultProfiles.length; i++) {
                        if (this.searchResultProfiles[i]["hasEmail"]) {
                            tempResult.push(this.searchResultProfiles[i]);
                        }
                    }
                    this.searchResultProfiles = tempResult;
                }

            },
            search: function () {
                this.searchNum++;
                this.isExportBtnActive = true;
                this.searchResultProfiles = this.$store.getters.data;
                this.pagination.currentPage = 1;
                this.shownProfiles = [];
                window.console.log(this.inputData);
                window.console.log(this.optionsFlag);


                this.searchByName();
                this.searchByField();
                this.searchByJournal();
                this.searchByUniversity();

                this.emailFlagSearch();
                this.searchByCountry();
                this.teacherFlagSearch();


                //pagination updated
                if (this.searchResultProfiles.length > 0) {
                    this.updateShownProfilesWithPagination();
                }

                // scroll();
                this.smoothScrollToResultTable();

                // scrollTo(0, document.getElementById("resultTableView").offsetHeight - 100);

            },

            updateShownProfilesWithPagination: function () {
                this.pagination.numberOfPages = parseInt(this.searchResultProfiles.length / this.pagination.numberOfItemsPerPage);

                if (this.searchResultProfiles.length % this.pagination.numberOfItemsPerPage != 0) {
                    this.pagination.numberOfPages++;
                }
                window.console.log(this.pagination.numberOfPages);


                let startIndex = (this.pagination.currentPage - 1) * (this.pagination.numberOfItemsPerPage);
                let endIndex = (this.pagination.currentPage * this.pagination.numberOfItemsPerPage);


                this.shownProfiles = [];

                if (this.pagination.currentPage != this.pagination.numberOfPages) {
                    for (let i = startIndex; i < endIndex; i++) {
                        this.shownProfiles.push(this.searchResultProfiles[i]);
                    }
                } else {
                    for (let i = startIndex; i < this.searchResultProfiles.length; i++) {
                        this.shownProfiles.push(this.searchResultProfiles[i]);
                    }
                }
            },
            changeCurrentPageNumber: function (newPageNumber) {
                this.pagination.currentPage = newPageNumber;
                this.updateShownProfilesWithPagination();
                this.smoothScrollToResultTable();

                // scrollTo(0, document.getElementById("resultTableView").offsetHeight - 100);
            },
            goPrevPage: function () {
                this.pagination.currentPage--;
                this.updateShownProfilesWithPagination();
                this.smoothScrollToResultTable();
                // scrollTo(0, document.getElementById("resultTableView").offsetHeight - 100);
            },
            goNextPage: function () {
                this.pagination.currentPage++;
                this.updateShownProfilesWithPagination();
                this.smoothScrollToResultTable();
                // scrollTo(0, document.getElementById("resultTableView").offsetHeight - 100);
            },
            smoothScrollToResultTable: function () {
                let step = 10, timeOffset = 5;
                let positionToScroll = document.getElementById("resultTableView").offsetHeight - 100;
                if (positionToScroll < scrollY) {
                    step *= -1;
                }

                if (Math.abs(scrollY - positionToScroll) <= Math.abs(step)) {
                    return;
                } else {
                    scrollBy(0, step);
                }

                setTimeout(this.smoothScrollToResultTable, timeOffset);
            },
            smoothScrollToTop: function () {
                let step = -10, timeOffset = 5;
                let positionToScroll = 0;
                if (Math.abs(scrollY - positionToScroll) <= Math.abs(step)) {
                    return;
                } else {
                    scrollBy(0, step);
                }

                setTimeout(this.smoothScrollToTop, timeOffset);
            }
        },
        computed: {
            exportedJsonProfiles: function () {
                let toReturnObj = [];
                for (let i = 0 ; i < this.searchResultProfiles.length ; i++) {
                    let profileFullObject = {};
                    let tempProfile = this.searchResultProfiles[i];
                    profileFullObject["name"] = tempProfile.name;
                    profileFullObject["phone"] = tempProfile.phone;
                    profileFullObject["email"] = tempProfile.email;
                    profileFullObject["country"] = tempProfile.country;
                    profileFullObject["hasEmail"] = tempProfile.hasEmail;
                    profileFullObject["hasExperiences"] = tempProfile.hasExperiences;
                    profileFullObject["hasWebsites"] = tempProfile.hasWebsites;
                    profileFullObject["hasSkills"] = tempProfile.hasSkills;
                    profileFullObject["hasJournals"] = tempProfile.hasJournals;
                    profileFullObject["isTeacher"] = tempProfile.isTeacher;
                    for (let i = 0; i < tempProfile.universities.length; i++) {
                        profileFullObject["university" + i + "name"] = tempProfile.universities[i].name;
                        profileFullObject["university" + i + "date"] = tempProfile.universities[i].date;
                        profileFullObject["university" + i + "degree"] = tempProfile.universities[i].degree;
                        profileFullObject["university" + i + "field of study"] = tempProfile.universities[i]["field of study"];
                    }

                    for (let i = 0; i < tempProfile.experiences.length; i++) {
                        profileFullObject["experience" + i + "company"] = tempProfile.experiences[i].company;
                        profileFullObject["experience" + i + "title"] = tempProfile.experiences[i].title;
                    }

                    for (let i = 0; i < tempProfile.skills.length; i++) {
                        profileFullObject["skill" + i] = tempProfile.skills[i];
                    }

                    for (let i = 0; i < tempProfile.websites.length; i++) {
                        profileFullObject["website" + i] = tempProfile.websites[i];
                    }

                    for (let i = 0; i < tempProfile.journals.length; i++) {
                        profileFullObject["journal" + i + "title"] = tempProfile.journals[i].company;
                        profileFullObject["journal" + i + "date"] = tempProfile.journals[i].date;
                        profileFullObject["journal" + i + "url"] = tempProfile.journals[i].url;
                        for (let j = 0; j < tempProfile.journals[i].authors.length; j++) {
                            profileFullObject["journal" + i + "author" + j] = tempProfile.journals[i].authors[j];
                        }
                    }

                    toReturnObj.push(profileFullObject);
                }


                return toReturnObj;
            }
        },
        mounted() {
            window.console.log("home component mounted.");
            this.valueOfScrollY = scrollY;
            scrollTo(0, 0);
        },
        created() {
            for (let i = 0; i < this.$store.getters.data; i++) {
                this.$store.getters.data[i]["index"] = i;
            }
            window.console.log("data indexes updated");
            window.console.log("home component created.");
            this.searchResultProfiles = this.$store.getters.data;
        }
    }
</script>
<style scoped>
    tbody tr th {
        font-weight: normal;
    }

    .normalFontWeight {
        font-weight: normal;
    }

    .table-hover tr {
        transition: background-color 100ms ease-in-out;
    }

    .page-item.active {
        color: white;
    }

    .page-item {
        display: inline-block;
    }

    .goUpBtn {
        z-index: 9999;
        position: fixed;
        bottom: 10px;
        right: 10px;
    }

    .titleColumn h3 {
        font-size: 1.2rem;
    }

    .exportBtn {
        font-weight: 400;
        margin: 30px;
    }

    @media only screen and (max-width: 768px) {
        .titleColumn {
            margin-top: 100px;
        }
    }
</style>
