import { Pressable, Text, View } from 'react-native';

import { copy984 } from '../generated/copy/copy984';
import { layout984 } from '../generated/layouts/layout984';
import { palette984 } from '../generated/palettes/palette984';

export function Screen984() {
	return (
		<View className="flex-col gap-3 p-6 bg-blue-50 rounded-xl border border-blue-200">
			<View className="size-4 bg-blue-100 rounded-full" />
			<View className={layout984.rhythm} />
			<Pressable className="px-5 py-4 bg-purple-400 active:bg-purple-700 rounded-md">
				<Text className="text-lg font-semibold text-gray-400">{copy984.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy984.detail} / {palette984.name}
			</Text>
		</View>
	);
}
