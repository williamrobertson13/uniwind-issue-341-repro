import { Pressable, Text, View } from 'react-native';

import { copy33 } from '../generated/copy/copy33';
import { layout33 } from '../generated/layouts/layout33';
import { palette33 } from '../generated/palettes/palette33';

export function Screen33() {
	return (
		<View className="grid grid-cols-2 gap-4 p-3 bg-green-100 rounded-2xl">
			<View className="size-13 bg-emerald-500 rounded-full" />
			<View className={layout33.rhythm} />
			<Pressable className="px-2 py-3 bg-purple-700 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-normal text-gray-700">{copy33.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy33.detail} / {palette33.name}
			</Text>
		</View>
	);
}
