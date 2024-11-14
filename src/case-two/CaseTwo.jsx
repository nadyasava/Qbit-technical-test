import React from 'react';

const comments = [
  {
    commentId: 1,
    commentContent: 'Hai',
    replies: [
      {
        commentId: 11,
        commentContent: 'Hai juga',
        replies: [
          {
            commentId: 111,
            commentContent: 'Haai juga hai jugaa',
          },
          {
            commentId: 112,
            commentContent: 'Haai juga hai jugaa',
          }
        ]
      },
      {
        commentId: 12,
        commentContent: 'Hai juga',
        replies: [
          {
            commentId: 121,
            commentContent: 'Haai juga hai jugaa',
          }
        ]
      }
    ]
  },
  {
    commentId: 2,
    commentContent: 'Halooo'
  }
];

const countComments = (comments) => {
  let count = comments.length; //komentar tanpa replies
  comments.forEach(comment => { 
    if (comment.replies) { //cek ada replies atau tidak
      count += countComments(comment.replies);
    }
  });
  return count;
};

const CaseTwo = () => {
  const totalComments = countComments(comments);

  return (
    <div style={{textAlign: "center"}}>
      <h2>Case 2 Answer</h2>
      <p>Total komentar termasuk balasan adalah sebanyak {totalComments} komentar</p>
    </div>
  );
};

export default CaseTwo;
