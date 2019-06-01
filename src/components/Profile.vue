<template>
    <main>
        <a role="button" @click.prevent="smoothScrollToTop()"
           class="btn btn-sm bg-success goUpBtn text-white">UP</a>
        <div id="headerSection" class="position-relative">
            <!--Hero for FREE version -->
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


                <!-- SVG separator -->
                <div class="separator separator-bottom separator-skew zindex-100">
                    <svg x="0" y="0" viewBox="0 0 2560 100" preserveAspectRatio="none" version="1.1"
                         xmlns="http://www.w3.org/2000/svg">
                        <polygon class="fill-white" points="2560 0 2560 100 0 100"></polygon>
                    </svg>
                </div>


            </section>
            <!--Error handling -->


        </div>
        <div v-if="$route.params.index < 0 || ($route.params.index > this.$store.getters.data.length - 1)">
            <div class="row">
                <div class="col-md-12 text-center">
                    <div class="alert alert-warning alert-dismissible fade show text-left mt-100-px"
                         role="alert">
                        <span class="alert-inner--icon"><i class="ni ni-bold-right"></i></span>
                        <span class="alert-inner--text"><strong>Error!</strong> Invalid profile!</span>
                        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <router-link to="/" class="btn btn-outline-warning errorHomeButton">Back to search console
                    </router-link>
                </div>
            </div>
        </div>

        <section v-else class="section profileWrapperBox">
            <div class="container">
                <div class="card card-profile shadow mt--300">
                    <div class="px-4">
                        <div class="row justify-content-center">
                            <div class="col-md-4 text-center">
                                <span class="badge badge-info" v-if="profile.hasEmail">Email Available</span>
                                <span class="badge badge-info" v-if="profile.isTeacher">Is Professor</span>
                                <span class="badge badge-info"
                                      v-if="profile.hasJournals">Journals Available</span>
                                <span class="badge badge-info" v-if="profile.hasSkills">Skills Available</span>
                                <span class="badge badge-info"
                                      v-if="profile.hasExperiences">Experiences Available</span>
                                <span class="badge badge-info"
                                      v-if="profile.hasWebsites">Websites Available</span>
                            </div>
                            <div class="col-md-4 text-center">
                            </div>
                            <div class="col-md-4">
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-md-12 text-center">
                                <h4 class="text-success">Personal Information</h4>
                                <div class="table-responsive">
                                    <table class="table table-striped">
                                        <thead>
                                        <tr>
                                            <th>
                                                Full Name
                                            </th>
                                            <th>
                                                Email
                                            </th>
                                            <th>
                                                Country
                                            </th>
                                            <th>
                                                Phone
                                            </th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td>
                                                {{this.profile.name}}
                                            </td>
                                            <td v-if="this.profile.hasEmail">{{this.profile.email}}</td>
                                            <td v-else>This user doesnt have an email</td>

                                            <td>{{this.profile.country}}</td>

                                            <td v-if="this.profile.hasPhone">{{this.profile.phone}}</td>
                                            <td v-else>This user doesnt have a phone number</td>

                                        </tr>
                                        </tbody>
                                    </table>
                                </div>

                            </div>
                            <div></div>
                            <div class="col-md-12 text-center" style="margin-top:30px;">
                                <h4 class="text-success" style="padding-top:20px;">Educational Information</h4>
                                <div v-if="profile['universities'].length > 0">
                                    <h6 class="text-info">Universities : </h6>
                                    <div class="table-responsive">
                                        <table class="table table-bordered table-hover" v-for="">
                                            <thead>
                                            <tr>
                                                <th>
                                                    University Name
                                                </th>
                                                <th>
                                                    Field of Study
                                                </th>
                                                <th>
                                                    Degree
                                                </th>
                                                <th>
                                                    Date
                                                </th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr v-for="universityObject in this.profile.universities">
                                                <td>
                                                    {{universityObject.name}}
                                                </td>
                                                <td>{{universityObject['field of study']}}</td>
                                                <td>{{universityObject['degree']}}</td>
                                                <td>{{universityObject['date']}}</td>
                                            </tr>
                                            </tbody>
                                        </table>

                                    </div>
                                </div>


                                <div v-if="profile['journals'].length > 0">
                                    <h6 class="text-info">Journal(s) : </h6>
                                    <div class="table-responsive">
                                        <table class="table table-bordered table-hover journalTable">
                                            <thead>
                                            <tr>
                                                <th>
                                                    Title
                                                </th>
                                                <th>
                                                    date
                                                </th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr v-for="journalObject in this.profile.journals">
                                                <td>
                                                    {{journalObject.title}}
                                                    <p>
                                                    <span class="badge badge-success"
                                                          v-for="journalAuthor in journalObject.authors">
                                                        {{journalAuthor}}
                                                    </span>
                                                    </p>
                                                </td>
                                                <td>{{journalObject.date}}</td>
                                            </tr>
                                            </tbody>
                                        </table>

                                    </div>
                                </div>

                                <div v-if="profile['experiences'].length > 0">
                                    <h6 class="text-info">Work / Research Experience(s) : </h6>
                                    <div class="table-responsive">
                                        <table class="table table-bordered table-hover journalTable">
                                            <thead>
                                            <tr>
                                                <th>
                                                    Company
                                                </th>
                                                <th>
                                                    Title
                                                </th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr v-for="experienceObject in this.profile.experiences">
                                                <td>
                                                    {{experienceObject.company}}
                                                </td>
                                                <td>{{experienceObject.title}}</td>
                                            </tr>
                                            </tbody>
                                        </table>

                                    </div>
                                </div>
                                <div class="row text-center">
                                    <div class="col-md-6">
                                        <h6 class="text-info">Skill(s) : </h6>
                                        <div class="table-responsive">
                                            <table class="table table-bordered table-hover journalTable text-center">
                                                <thead>
                                                <tr>
                                                    <th>
                                                        Skill Name
                                                    </th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                <tr v-for="skill in this.profile.skills">
                                                    <td>
                                                        {{skill}}
                                                    </td>
                                                </tr>
                                                </tbody>
                                            </table>

                                        </div>

                                    </div>
                                    <div class="col-md-6">
                                        <h6 class="text-info">Website(s) : </h6>
                                        <div class="table-responsive">
                                            <table class="table table-bordered table-hover journalTable text-center">
                                                <thead>
                                                <tr>
                                                    <th>
                                                        Website URL:
                                                    </th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                <tr v-for="website in this.profile.websites">
                                                    <td>
                                                        <a :href="website" target="_blank">{{website}}</a>
                                                    </td>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <download-excel
                                                class="btn btn-lg btn-success exportBtn"
                                                :data="this.jsonProfile"
                                                :name="this.profile.name +'-'+ Date() + '.xls'"
                                        >
                                            Export Profile Data
                                        </download-excel>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<script>
    export default {
        name: "Profile",
        data: function () {
            return {
                profile: {},
            }
        },
        methods: {
            smoothScrollToTop: function () {
                let step = -10, timeOffset = 5;
                let positionToScroll = 0;
                if (Math.abs(scrollY - positionToScroll) <= Math.abs(step)) {
                    return;
                } else {
                    scrollBy(0, step);
                }

                setTimeout(this.smoothScrollToTop, timeOffset);
            },
        },
        mounted() {
            window.console.log("profile component mounted");
            this.smoothScrollToTop();
        },
        computed: {
            jsonProfile: function () {
                let toReturnObj = [];
                let profileFullObject = {};
                profileFullObject["name"] = this.profile.name;
                profileFullObject["phone"] = this.profile.phone;
                profileFullObject["email"] = this.profile.email;
                profileFullObject["country"] = this.profile.country;
                profileFullObject["hasEmail"] = this.profile.hasEmail;
                profileFullObject["hasExperiences"] = this.profile.hasExperiences;
                profileFullObject["hasWebsites"] = this.profile.hasWebsites;
                profileFullObject["hasSkills"] = this.profile.hasSkills;
                profileFullObject["hasJournals"] = this.profile.hasJournals;
                profileFullObject["isTeacher"] = this.profile.isTeacher;
                for (let i = 0; i < this.profile.universities.length; i++) {
                    profileFullObject["university" + i + "name"] = this.profile.universities[i].name;
                    profileFullObject["university" + i + "date"] = this.profile.universities[i].date;
                    profileFullObject["university" + i + "degree"] = this.profile.universities[i].degree;
                    profileFullObject["university" + i + "field of study"] = this.profile.universities[i]["field of study"];
                }

                for (let i = 0; i < this.profile.experiences.length; i++) {
                    profileFullObject["experience" + i + "company"] = this.profile.experiences[i].company;
                    profileFullObject["experience" + i + "title"] = this.profile.experiences[i].title;
                }

                for (let i = 0; i < this.profile.skills.length; i++) {
                    profileFullObject["skill" + i] = this.profile.skills[i];
                }

                for (let i = 0; i < this.profile.websites.length; i++) {
                    profileFullObject["website" + i] = this.profile.websites[i];
                }

                for (let i = 0; i < this.profile.journals.length; i++) {
                    profileFullObject["journal" + i + "title"] = this.profile.journals[i].company;
                    profileFullObject["journal" + i + "date"] = this.profile.journals[i].date;
                    profileFullObject["journal" + i + "url"] = this.profile.journals[i].url;
                    for (let j = 0; j < this.profile.journals[i].authors.length; j++) {
                        profileFullObject["journal" + i + "author" + j] = this.profile.journals[i].authors[j];
                    }
                }


                window.console.log(profileFullObject);

                toReturnObj.push(profileFullObject);
                return toReturnObj;
            }
        },
        created() {
            this.profile = this.$store.getters.data[this.$route.params.index];
            window.console.log("profile component created", this.$route.params["index"]);
            window.console.log(this.profile["universities"].length);
            window.console.log(this.profile);
        }
    }
</script>

<style scoped>
    .badge {
        margin-top: 10px;
    }

    .journalTable td {
        line-height: 30px;
    }

    .journalTable .badge {
        text-transform: none;
        font-weight: normal;
        margin-left: 15px;
    }

    h6 {
        margin: 30px;
    }

    .table-hover tr {
        transition: background-color 100ms ease-in-out;
    }

    .exportBtn {
        font-weight: 400;
        margin: 30px;
    }

    .goUpBtn {
        z-index: 9999;
        position: fixed;
        bottom: 10px;
        right: 10px;
    }

    .profileWrapperBox {
        /*margin-top:350px;*/
    }

    .mt-100-px {
        margin-top: 100px;
    }

    .errorHomeButton {
        font-weight: normal;
    }
</style>