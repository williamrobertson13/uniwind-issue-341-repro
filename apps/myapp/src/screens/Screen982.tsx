import { Pressable, Text, View } from 'react-native';

import { copy982 } from '../generated/copy/copy982';
import { layout982 } from '../generated/layouts/layout982';
import { palette982 } from '../generated/palettes/palette982';

export function Screen982() {
	return (
		<View className="relative flex p-8 bg-indigo-50 rounded shadow-2xl">
			<View className="size-14 bg-amber-500 rounded-full" />
			<View className={layout982.rhythm} />
			<Pressable className="px-3 py-2 bg-purple-200 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-normal text-gray-200">{copy982.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy982.detail} / {palette982.name}
			</Text>
		</View>
	);
}
