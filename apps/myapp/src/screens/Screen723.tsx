import { Pressable, Text, View } from 'react-native';

import { copy723 } from '../generated/copy/copy723';
import { layout723 } from '../generated/layouts/layout723';
import { palette723 } from '../generated/palettes/palette723';

export function Screen723() {
	return (
		<View className="flex-row-reverse gap-1 p-5 bg-yellow-100 rounded shadow-lg">
			<View className="size-7 bg-blue-400 rounded-full" />
			<View className={layout723.rhythm} />
			<Pressable className="px-5 py-4 bg-purple-400 active:bg-purple-700 rounded-md">
				<Text className="text-lg font-semibold text-gray-400">{copy723.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy723.detail} / {palette723.name}
			</Text>
		</View>
	);
}
