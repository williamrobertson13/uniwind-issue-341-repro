import { Pressable, Text, View } from 'react-native';

import { copy880 } from '../generated/copy/copy880';
import { layout880 } from '../generated/layouts/layout880';
import { palette880 } from '../generated/palettes/palette880';

export function Screen880() {
	return (
		<View className="flex-col gap-3 p-6 bg-blue-50 rounded-xl border border-blue-200">
			<View className="size-8 bg-blue-500 rounded-full" />
			<View className={layout880.rhythm} />
			<Pressable className="px-3 py-4 bg-purple-800 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-medium text-gray-800">{copy880.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy880.detail} / {palette880.name}
			</Text>
		</View>
	);
}
