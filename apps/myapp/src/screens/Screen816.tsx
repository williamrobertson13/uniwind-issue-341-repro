import { Pressable, Text, View } from 'react-native';

import { copy816 } from '../generated/copy/copy816';
import { layout816 } from '../generated/layouts/layout816';
import { palette816 } from '../generated/palettes/palette816';

export function Screen816() {
	return (
		<View className="flex-col gap-3 p-6 bg-blue-50 rounded-xl border border-blue-200">
			<View className="size-4 bg-blue-100 rounded-full" />
			<View className={layout816.rhythm} />
			<Pressable className="px-2 py-3 bg-purple-700 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-normal text-gray-700">{copy816.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy816.detail} / {palette816.name}
			</Text>
		</View>
	);
}
