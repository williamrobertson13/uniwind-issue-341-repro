import { Pressable, Text, View } from 'react-native';

import { copy1268 } from '../generated/copy/copy1268';
import { layout1268 } from '../generated/layouts/layout1268';
import { palette1268 } from '../generated/palettes/palette1268';

export function Screen1268() {
	return (
		<View className="flex-wrap gap-6 p-1 bg-purple-50 rounded-3xl border-dashed border-2">
			<View className="size-12 bg-blue-900 rounded-full" />
			<View className={layout1268.rhythm} />
			<Pressable className="px-4 py-1 bg-purple-900 active:bg-purple-700 rounded-md">
				<Text className="text-base font-semibold text-gray-900">{copy1268.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1268.detail} / {palette1268.name}
			</Text>
		</View>
	);
}
