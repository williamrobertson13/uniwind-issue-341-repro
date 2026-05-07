import { Pressable, Text, View } from 'react-native';

import { copy565 } from '../generated/copy/copy565';
import { layout565 } from '../generated/layouts/layout565';
import { palette565 } from '../generated/palettes/palette565';

export function Screen565() {
	return (
		<View className="absolute inset-0 p-4 bg-pink-100 rounded-full opacity-90">
			<View className="size-5 bg-blue-200 rounded-full" />
			<View className={layout565.rhythm} />
			<Pressable className="px-3 py-4 bg-purple-800 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-medium text-gray-800">{copy565.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy565.detail} / {palette565.name}
			</Text>
		</View>
	);
}
