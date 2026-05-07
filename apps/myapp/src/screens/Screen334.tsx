import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy334 } from '../generated/copy/copy334';
import { layout334 } from '../generated/layouts/layout334';
import { palette334 } from '../generated/palettes/palette334';

const RuntimeView334 = withUniwind(View);

export function Screen334() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-sm font-normal text-gray-200');

	return (
		<View className="relative flex p-8 bg-indigo-50 rounded shadow-2xl">
			<View className="size-14 bg-amber-500 rounded-full" />
			<RuntimeView334 styleClassName={layout334.rhythm} />
			<Pressable className="px-3 py-2 bg-purple-200 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-normal text-gray-200" style={resolvedStyle}>{copy334.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy334.detail} / {palette334.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
