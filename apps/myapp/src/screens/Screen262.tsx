import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy262 } from '../generated/copy/copy262';
import { layout262 } from '../generated/layouts/layout262';
import { palette262 } from '../generated/palettes/palette262';

const RuntimeView262 = withUniwind(View);

export function Screen262() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-sm font-normal text-gray-200');

	return (
		<View className="relative flex p-8 bg-indigo-50 rounded shadow-2xl">
			<View className="size-14 bg-amber-500 rounded-full" />
			<RuntimeView262 styleClassName={layout262.rhythm} />
			<Pressable className="px-3 py-2 bg-purple-200 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-normal text-gray-200" style={resolvedStyle}>{copy262.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy262.detail} / {palette262.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
