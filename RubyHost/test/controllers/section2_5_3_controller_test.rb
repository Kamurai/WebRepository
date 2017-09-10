require 'test_helper'

class Section253ControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get section2_5_3_index_url
    assert_response :success
  end

end
