import { Pressable, Text, View } from 'react-native';

import { copy219 } from '../generated/copy/copy219';
import { layout219 } from '../generated/layouts/layout219';
import { palette219 } from '../generated/palettes/palette219';

export function Screen219() {
	return (
		<View className="flex-row-reverse gap-1 p-5 bg-yellow-100 rounded shadow-lg">
			<View className="size-7 bg-blue-400 rounded-full" />
			<View className={layout219.rhythm} />
			<Pressable className="px-5 py-4 bg-purple-400 active:bg-purple-700 rounded-md">
				<Text className="text-lg font-semibold text-gray-400">{copy219.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy219.detail} / {palette219.name}
			</Text>
		</View>
	);
}
