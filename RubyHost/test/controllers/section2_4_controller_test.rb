require 'test_helper'

class Section24ControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get section2_4_index_url
    assert_response :success
  end

end
