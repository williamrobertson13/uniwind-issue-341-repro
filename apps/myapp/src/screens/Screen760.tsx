import { Pressable, Text, View } from 'react-native';

import { copy760 } from '../generated/copy/copy760';
import { layout760 } from '../generated/layouts/layout760';
import { palette760 } from '../generated/palettes/palette760';

export function Screen760() {
	return (
		<View className="flex-col gap-3 p-6 bg-blue-50 rounded-xl border border-blue-200">
			<View className="size-8 bg-blue-500 rounded-full" />
			<View className={layout760.rhythm} />
			<Pressable className="px-6 py-1 bg-purple-500 active:bg-purple-700 rounded-md">
				<Text className="text-xl font-bold text-gray-500">{copy760.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy760.detail} / {palette760.name}
			</Text>
		</View>
	);
}
