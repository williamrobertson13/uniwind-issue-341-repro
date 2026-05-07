import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy681 } from '../generated/copy/copy681';
import { layout681 } from '../generated/layouts/layout681';
import { palette681 } from '../generated/palettes/palette681';

const RuntimeView681 = withUniwind(View);

export function Screen681() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-xs font-normal text-gray-700');

	return (
		<View className="grid grid-cols-2 gap-4 p-3 bg-green-100 rounded-2xl">
			<View className="size-13 bg-emerald-500 rounded-full" />
			<RuntimeView681 styleClassName={layout681.rhythm} />
			<Pressable className="px-2 py-3 bg-purple-700 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-normal text-gray-700" style={resolvedStyle}>{copy681.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy681.detail} / {palette681.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
