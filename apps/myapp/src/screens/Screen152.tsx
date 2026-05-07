import { Pressable, Text, View } from 'react-native';

import { copy152 } from '../generated/copy/copy152';
import { layout152 } from '../generated/layouts/layout152';
import { palette152 } from '../generated/palettes/palette152';

export function Screen152() {
	return (
		<View className="flex-col gap-3 p-6 bg-blue-50 rounded-xl border border-blue-200">
			<View className="size-12 bg-blue-900 rounded-full" />
			<View className={layout152.rhythm} />
			<Pressable className="px-4 py-1 bg-purple-900 active:bg-purple-700 rounded-md">
				<Text className="text-base font-semibold text-gray-900">{copy152.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy152.detail} / {palette152.name}
			</Text>
		</View>
	);
}
