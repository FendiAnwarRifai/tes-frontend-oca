<template>
    <div style="width:736px;">
        <span class="tittle">SMS Scheduller</span>
        <form style="margin-top: 42px; margin-bottom: 40px;">
            <div class="form-group">
                <label for="broadcast">Broadcast Name</label>
                <input type="text" class="form-control form-control-lg" id="broadcast" placeholder="name of your broadcast">
            </div>
            <div class="form-group" style="position:relative;">
                    <label for="selected">
                    Phonebook
                    <i class="fas fa-chevron-down down-select"></i>
                    </label>
                <select  style="font-style: italic;" class="form-control select" id="selected">
                <option selected disabled>Select your phonebook</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                </select>
            </div>
            <div class="form-group mb-5">
                <label for="sms">Message</label>
                <textarea class="form-control" id="sms">
                    Halo Bili, perkenalkan kami OCA (Omni Communication Assistant). Aplikasi berbasis web yang bisa membantu kamu menyebarkan pesan baik itu menggunakan voice ataupun text. Kamu bisa menjangkau seluruh konsumen dengan cepat, masif, dan otomatis. Info lebih lanjut kunjungi web kami

                    www.ocatelkom.co.id
                </textarea>
                <span class="lengthCharacter">Character 303/1024</span>
            </div>
            <hr>
        </form>
        <span class="schedule">Schedule</span><br>
        <span class="ket">When and how often do you want to broadcast this messages?</span>

        <div class="row" style="margin-top:31px;">
            <div class="col-3 runOn">
                Run On
            </div>
            <div class="col">
                <div class="row pl-3 mb-3">
                        <div  v-for="data in day" :key="data.index" class="form-check form-check-inline custom-control custom-checkbox">
                            <input :id="data.name" type="checkbox" class="custom-control-input">
                            <label class="custom-control-label" :for="data.name">{{data.name}}</label>
                        </div>
                </div>
                <div class="row">
                    <div class="col">
                    <div class="custom-control custom-radio mb-3" style="position:relative;">
                    <input v-model="radio" type="radio" id="customRadio1" name="customRadio" class="custom-control-input" value="0">
                    <label class="custom-control-label" for="customRadio1">Once Day</label>
                     <div style="position:absolute;left: 120px; top: -3px;">
                         At <input  :disabled="radio == '0' ? false : true" style="height: 25px;" type="time"> WIB
                     </div>
                    </div>
                    <div class="custom-control custom-radio" style="position:relative;">
                    <input v-model="radio" type="radio" id="customRadio2" name="customRadio" class="custom-control-input" value="1">
                    <label class="custom-control-label" for="customRadio2">At Intervals</label>
                    <div style="position:absolute;left: 120px; top: -3px;">
                         Every
                         <select :disabled="radio == '1' ? false : true" class="ml-2" name="" id="">
                             <option v-for="data in 24" :key="data.id" value="">{{data}}</option>
                         </select>
                         <select  :disabled="radio == '1' ? false : true" class="ml-2" name="" id="">
                             <option value="">Hours</option>
                             <option value="">Minutes</option>
                         </select>
                        From <input  :disabled="radio == '1' ? false : true" style="height: 25px;" type="time"> WIB
                     </div>
                    </div>
                    </div>
                </div>
                <div class="row mt-5" style=" float:right;">
                    <button type="submit" class="btn" style="background: #E81255; color:white; border-radius: 8px;">Send messages</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      day: [
        { name: 'Mon' }, { name: 'Tue' },
        { name: 'Wed' }, { name: 'Thu' },
        { name: 'Fri' }, { name: 'Sat' },
        { name: 'Sun' }
      ],
      radio: ''
    }
  }
}
</script>

<style scoped>
.tittle {
    font-weight: bold;
    font-size: 32px;
    line-height: 18px;
    letter-spacing: 0.002em;
    color: #3D3D3D;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    margin-bottom: 42px;
}
::placeholder{
    font-style: italic;
    font-size: 14px;
    color: #DEDEDE;
}
#broadcast {
    Width: 270px;
    Height: 44px;
    padding: 13px;
    border: 1px solid #BBC1C8;
    border-radius: 4px;
    font-size: 15px;
}
.down-select{
    color: #ED1260;
    position: absolute;
    left: 230px;
    top: 43px;
    font-size:22px;
}
.select{
     -webkit-appearance: none;
    Width: 270px;
    Height: 44px;
    border: 1px solid #BBC1C8;
    border-radius: 4px;
    font-size: 15px;
}
textarea {
    Width:  734px;
    Height:  191px !important;
}
.lengthCharacter{
    font-size: 12px;
    line-height: 10px;
    color: #C5C7CD;
    float: right;
    margin-top: 12px;
}

.schedule{
    font-weight: bold;
    font-size: 18px;
    line-height: 18px;
    letter-spacing: 0.002em;
    color: #4F5154;
    margin-top: 10px;
}
.ket{
    font-style: italic;
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    letter-spacing: 0.002em;

    color: #BBC1C8;
}
.runOn{
    font-weight: bold;
    font-size: 14px;
    line-height: 18px;
    letter-spacing: 0.002em;
    color: #3D3D3D;

}
.custom-checkbox .custom-control-input:checked ~ .custom-control-label::before {
     background-color: #E81255;
     box-shadow:0 0 3px #E81255;
     border-color: #E81255;
}
 .custom-checkbox .custom-control-input:focus ~ .custom-control-label::before {
     box-shadow:0 0 3px #E81255;
     border-color: #E81255;
}
.custom-radio .custom-control-input:checked ~ .custom-control-label::before {
     background-color: #E81255;
     box-shadow:0 0 3px #E81255;
     border-color: #E81255;
}
 .custom-radio .custom-control-input:focus ~ .custom-control-label::before {
     box-shadow:0 0 3px #E81255;
     border-color: #E81255;
}
</style>
