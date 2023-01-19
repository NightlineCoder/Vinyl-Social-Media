function NoteForm() {
  return (
    <div>
      <div class="border border-dark custom-post">
        Post is here
        <form>
          <input
            type="text"
            name="noteForm"
            id="noteForm"
            placeholder="What's your note?"
          />
        </form>
      </div>
    </div>
  );
}

export default NoteForm;
