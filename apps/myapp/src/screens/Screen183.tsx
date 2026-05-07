import { Pressable, Text, View } from 'react-native';

import { copy183 } from '../generated/copy/copy183';
import { layout183 } from '../generated/layouts/layout183';
import { palette183 } from '../generated/palettes/palette183';

export function Screen183() {
	return (
		<View className="flex-row gap-2 p-4 bg-gray-100 rounded-lg shadow-md">
			<View className="size-7 bg-blue-400 rounded-full" />
			<View className={layout183.rhythm} />
			<Pressable className="px-5 py-4 bg-purple-400 active:bg-purple-700 rounded-md">
				<Text className="text-lg font-semibold text-gray-400">{copy183.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy183.detail} / {palette183.name}
			</Text>
		</View>
	);
}
