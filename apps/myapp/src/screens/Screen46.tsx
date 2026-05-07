import { Pressable, Text, View } from 'react-native';

import { copy46 } from '../generated/copy/copy46';
import { layout46 } from '../generated/layouts/layout46';
import { palette46 } from '../generated/palettes/palette46';

export function Screen46() {
	return (
		<View className="relative flex p-8 bg-indigo-50 rounded shadow-2xl">
			<View className="size-14 bg-amber-500 rounded-full" />
			<View className={layout46.rhythm} />
			<Pressable className="px-3 py-2 bg-purple-200 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-normal text-gray-200">{copy46.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy46.detail} / {palette46.name}
			</Text>
		</View>
	);
}
