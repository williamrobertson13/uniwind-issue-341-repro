import { Pressable, Text, View } from 'react-native';

import { copy410 } from '../generated/copy/copy410';
import { layout410 } from '../generated/layouts/layout410';
import { palette410 } from '../generated/palettes/palette410';

export function Screen410() {
	return (
		<View className="flex items-center justify-center p-2 bg-red-50 rounded-md ring-2 ring-red-300">
			<View className="size-6 bg-blue-300 rounded-full" />
			<View className={layout410.rhythm} />
			<Pressable className="px-7 py-2 bg-purple-600 active:bg-purple-700 rounded-md">
				<Text className="text-2xl font-light text-gray-600">{copy410.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy410.detail} / {palette410.name}
			</Text>
		</View>
	);
}
