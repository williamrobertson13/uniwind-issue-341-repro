import { Pressable, Text, View } from 'react-native';

import { copy729 } from '../generated/copy/copy729';
import { layout729 } from '../generated/layouts/layout729';
import { palette729 } from '../generated/palettes/palette729';

export function Screen729() {
	return (
		<View className="grid grid-cols-2 gap-4 p-3 bg-green-100 rounded-2xl">
			<View className="size-13 bg-emerald-500 rounded-full" />
			<View className={layout729.rhythm} />
			<Pressable className="px-2 py-1 bg-purple-100 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-light text-gray-100">{copy729.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy729.detail} / {palette729.name}
			</Text>
		</View>
	);
}
