import { Pressable, Text, View } from 'react-native';

import { copy622 } from '../generated/copy/copy622';
import { layout622 } from '../generated/layouts/layout622';
import { palette622 } from '../generated/palettes/palette622';

export function Screen622() {
	return (
		<View className="relative flex p-8 bg-indigo-50 rounded shadow-2xl">
			<View className="size-14 bg-amber-500 rounded-full" />
			<View className={layout622.rhythm} />
			<Pressable className="px-3 py-2 bg-purple-200 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-normal text-gray-200">{copy622.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy622.detail} / {palette622.name}
			</Text>
		</View>
	);
}
