import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy622 } from '../generated/copy/copy622';
import { layout622 } from '../generated/layouts/layout622';
import { palette622 } from '../generated/palettes/palette622';

const RuntimeView622 = withUniwind(View);

export function Screen622() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-sm font-normal text-gray-200');

	return (
		<View className="relative flex p-8 bg-indigo-50 rounded shadow-2xl">
			<View className="size-14 bg-amber-500 rounded-full" />
			<RuntimeView622 styleClassName={layout622.rhythm} />
			<Pressable className="px-3 py-2 bg-purple-200 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-normal text-gray-200" style={resolvedStyle}>{copy622.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy622.detail} / {palette622.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
