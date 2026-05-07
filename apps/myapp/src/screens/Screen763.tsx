import { Pressable, Text, View } from 'react-native';

import { copy763 } from '../generated/copy/copy763';
import { layout763 } from '../generated/layouts/layout763';
import { palette763 } from '../generated/palettes/palette763';

export function Screen763() {
	return (
		<View className="flex-row-reverse gap-1 p-5 bg-yellow-100 rounded shadow-lg">
			<View className="size-11 bg-blue-800 rounded-full" />
			<View className={layout763.rhythm} />
			<Pressable className="px-3 py-4 bg-purple-800 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-medium text-gray-800">{copy763.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy763.detail} / {palette763.name}
			</Text>
		</View>
	);
}
