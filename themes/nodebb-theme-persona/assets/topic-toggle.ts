
$(document).ready(() => {
    $('#anonymousToggle').change(() => {
      const isChecked: boolean = $('#anonymousToggle').prop('checked');
  
      // Check if the checkbox is checked (anonymous post requested)
      if (isChecked) {
        // Gather the post content from the post content input field.
        const postContent: string = $('#postContent').val() as string; // Replace 'postContent' with the actual ID or selector of your post content input field.
  
        // Perform an AJAX request to submit the post anonymously.
        $.ajax({
          type: 'POST',
          url: '/api/posts',
          data: {
            content: postContent,
            isAnonymous: true, // You can add a custom flag to indicate anonymous posting.
          },
          success: function (response) {
            // Handle the successful post submission here, e.g., show a success message.
            alert('Post submitted anonymously.');
          },
          error: function (error) {
            // Handle errors, e.g., display an error message.
            alert('Error: Unable to submit post anonymously.');
          },
        });
  
        $('#postContent').val('');
      } else {
      }
    });
  });