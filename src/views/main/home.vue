<template>
    <div>
        <div class="card card-custom">
        <div class="card-body">
            <div class="title-text">
                Hello, Welcome to OCA!
            </div>
            <span class="text-desc">
                Let’s start make some noise and make your campaign great again! <a href="http://">click here</a> to spread your messages.
            </span>
        </div>
        </div>
        <span class="remaning mt-5">Remaining Quota</span>
        <div class="row mt-3" style="font-size: 12px;">
            <div v-for="data in remaningData" :key="data.index" class="col-3">
                <div class="card">
                <div class="card-body p-3">
                    <div class="row">
                        <div class="col-5">
                            {{data.name}}
                        </div>
                        <div class="col-7 text-right">
                            <span :class="data.class">{{data.info}}</span>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
        <div class="card mt-5">
            <div class="card-body">
                <div class="row">
                    <div class="col">
                        <span class="tb-title">Recent BLAST</span>
                    </div>
                    <div class="col text-right pr-5 tb-set">
                        <i class="fas fa-sort-amount-up mr-2"></i>
                        <span>Sort</span>
                        <i class="fas fa-filter ml-3 mr-2"></i>
                        <span>Filter</span>
                    </div>
                </div>
                <table class="table mt-3">
                    <thead style="color: #979797;" class="text-center">
                        <td>Id Name</td>
                        <td>Type</td>
                        <td>campaign</td>
                        <td>Total Blast</td>
                        <td>Status</td>
                        <td>Date</td>
                    </thead>
                    <tbody>
                        <tr v-for="data in 40" :key="data.index">
                        <td style="border-top:none;">MTN_EGY-LIFE</td>
                        <td style="border-top:none;" class="text-center">call</td>
                        <td style="border-top:none;" class="text-center">Reminding Billing 20 September</td>
                        <td style="border-top:none;" class="text-center">1255</td>
                        <td style="border-top:none; color: #61C378;" class="text-center">Success</td>
                        <td style="border-top:none;" class="text-center">July 15, 2018 4:47 AM</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      remaningData: [
        { name: 'Call', info: '4840 seconds', class: 'call' },
        { name: 'SMS', info: '1245 messages', class: 'sms' },
        { name: 'Email', info: '7710 mails', class: 'email' },
        { name: 'Whastapp', info: '330 messages', class: 'whatsapp' }
      ]
    }
  }
}
</script>

<style scoped>
/* * {
    border:1px solid blue !important;
    } */
a{
    color: #ED1260;
    text-decoration: none;
}
.card-custom{
    border-top: 12px solid #ED1260;
    border-radius: 12px;
    margin-bottom: 80px;
}
.title-text{
    font-weight: bold;
    font-size: 24px;
    line-height: 29px;
    letter-spacing: 0.002em;
    color: #312F30;
}
.text-desc{
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 0.002em;
    color: #312F30;
}
.remaning{
    font-weight: bold;
    font-size: 18px;
    line-height: 22px;
    color: rgba(0, 0, 0, 0.6);
}
.call, .sms, .email, .whatsapp{
    font-weight: bold;
    font-size: 14px;
    line-height: 22px;
    text-align: right;
    letter-spacing: 0.01em;
}
.call{
    color: #22B9FF;
}
.sms{
    color: #FFB822;
}
.email{
    color: #F554E9;
}
.whatsapp{
    color: #1DC9B7;
}
.tb-title{
    font-weight: bold;
    font-size: 14px;
    line-height: 17px;
    color: #ED1260;
}
.tb-set i {
    color:#C5C7CD;
}
.tb-set{
    font-weight: 600;
    font-size: 12px;
    line-height: 20px;
    letter-spacing: 0.2px;
    color: #4B506D;
}
tbody {
    display: block;
    max-height: 280px;
    overflow-y: scroll;
}
thead, tbody tr {
    display: table;
    width: 100%;
    table-layout: fixed;
    font-size: 11px;
}
thead {
    width: calc( 100% - 1em )
}
/* width */
::-webkit-scrollbar {
  width: 5px;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey;
  border-radius: 10px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #ED1260;
  border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background:  #ec709c;
}
</style>
