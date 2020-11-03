  <template>
  <div>
    <div v-if="showModal">
      <div class="modalOverlay" @click.self="showModal = false;">
        <div class="cardModal">
          <h1>Modal heading</h1>
          <p>This my first modal using vue.js</p>

          <div id="modalBody">
            <textarea rows="4" cols="48" placeholder="Enter text here" v-on:input="body" v-model="body" ></textarea>
          </div>

          <button @click="showModal = !showModal;">Close</button>
        </div>
      </div>
    </div>

    <button @click="showModal = !showModal;">Edit Task</button>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      showModal: false,
      body: '',
    };
  },
};
</script>

<style scoped>
.cardModal {
  width: 500px;
  height: 500px;
  margin: 0px auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px 3px;
}

.modalOverlay {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: #00000094;
  z-index: 999;
  transition: opacity 0.2s ease;
}
#modalBody {
  border: 1px solid goldenrod;
}
</style>