import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy217 } from '../generated/copy/copy217';
import { layout217 } from '../generated/layouts/layout217';
import { palette217 } from '../generated/palettes/palette217';

const RuntimeView217 = withUniwind(View);

export function Screen217() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-sm font-normal text-gray-200');

	return (
		<View className="grid grid-cols-2 gap-4 p-3 bg-green-100 rounded-2xl">
			<View className="size-5 bg-blue-200 rounded-full" />
			<RuntimeView217 styleClassName={layout217.rhythm} />
			<Pressable className="px-3 py-2 bg-purple-200 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-normal text-gray-200" style={resolvedStyle}>{copy217.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy217.detail} / {palette217.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
