import { Pressable, Text, View } from 'react-native';

import { copy657 } from '../generated/copy/copy657';
import { layout657 } from '../generated/layouts/layout657';
import { palette657 } from '../generated/palettes/palette657';

export function Screen657() {
	return (
		<View className="grid grid-cols-2 gap-4 p-3 bg-green-100 rounded-2xl">
			<View className="size-13 bg-emerald-500 rounded-full" />
			<View className={layout657.rhythm} />
			<Pressable className="px-2 py-1 bg-purple-100 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-light text-gray-100">{copy657.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy657.detail} / {palette657.name}
			</Text>
		</View>
	);
}
