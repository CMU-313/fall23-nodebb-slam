<div title="[[topic:sort_by]]" class="search-container" component="thread/sort">
    <button type="submit" onClick="return getRecentPosts()">Submit</button>
    <button class="btn btn-sm btn-primary" data-toggle="search-container" type="button">
    <span><i class="fa fa-fw fa-sort"></i></span></button>
    <div class="search-container">
      <form action="posts.js">
      <input type="text" class="related" data-sort="related" placeholder="Search..." name="search">
      <button type="submit" onClick="return getRecentPosts()">Submit</button>
      </form>
    </div>
</div>