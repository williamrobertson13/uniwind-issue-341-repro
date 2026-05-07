import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy838 } from '../generated/copy/copy838';
import { layout838 } from '../generated/layouts/layout838';
import { palette838 } from '../generated/palettes/palette838';

const RuntimeView838 = withUniwind(View);

export function Screen838() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-sm font-normal text-gray-200');

	return (
		<View className="relative flex p-8 bg-indigo-50 rounded shadow-2xl">
			<View className="size-14 bg-amber-500 rounded-full" />
			<RuntimeView838 styleClassName={layout838.rhythm} />
			<Pressable className="px-3 py-2 bg-purple-200 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-normal text-gray-200" style={resolvedStyle}>{copy838.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy838.detail} / {palette838.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
