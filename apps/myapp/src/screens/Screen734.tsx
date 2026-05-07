import { Pressable, Text, View } from 'react-native';

import { copy734 } from '../generated/copy/copy734';
import { layout734 } from '../generated/layouts/layout734';
import { palette734 } from '../generated/palettes/palette734';

export function Screen734() {
	return (
		<View className="relative flex p-8 bg-indigo-50 rounded shadow-2xl">
			<View className="size-6 bg-blue-300 rounded-full" />
			<View className={layout734.rhythm} />
			<Pressable className="px-7 py-2 bg-purple-600 active:bg-purple-700 rounded-md">
				<Text className="text-2xl font-light text-gray-600">{copy734.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy734.detail} / {palette734.name}
			</Text>
		</View>
	);
}
