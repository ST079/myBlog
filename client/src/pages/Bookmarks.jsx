import React from "react";

export const Bookmarks = () => {
  return (
    <div>
      {/* BookMakrs */}
      <div>
        <h1 className="text-2xl text-center font-semibold mb-4">
          My Bookmarks
        </h1>
        <div>
          <table className="table table-striped">
       
          </table>
        </div>
      </div>

      {/* if there isn't anything in the bookmark*/}
      <NoBookmarks />
    </div>
  );
};

export const NoBookmarks = () => {
  return (
    <div className="border rounded p-5" style={{ marginTop: "100px" }}>
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-2xl text-center font-semibold mb-4">
          No Bookmarks Yet !!
        </h2>
        <p className="text-gray-600 text-center">
          You haven&#39;t added any bookmarks yet. Start exploring and bookmark
          your favorite blogs!
        </p>
      </div>
    </div>
  );
};
