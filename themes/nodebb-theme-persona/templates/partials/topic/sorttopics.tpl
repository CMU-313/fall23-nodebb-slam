<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

<form name="searchTopics" style = "display:inline" action="{config.relative_path}/category/{../slug}" method="GET">
        <input class="search-box" type="text" placeholder="Search..." name="searchTopics">
        <button class="btn btn-default" type="submit"><i class="fa fa-search"></i></button>
</form>
<style>
.search-container {
    padding-top: -20px;
}

.search-box {
    display: inline;
    margin-bottom: 0;
    background-color: transparent;
    font-size: 11px;
    line-height: 13px;
    padding: 12px;
    outline: 0;
    border: 1px solid transparent;
    border-bottom: 1px solid #575756;
    border-radius: 0;

    &::placeholder {
        color: color(#575756 a(0.8));
        text-transform: uppercase;
        letter-spacing: 1.5px;
    }
}
</style>