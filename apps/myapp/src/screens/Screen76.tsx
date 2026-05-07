import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy76 } from '../generated/copy/copy76';
import { layout76 } from '../generated/layouts/layout76';
import { palette76 } from '../generated/palettes/palette76';

const RuntimeView76 = withUniwind(View);

export function Screen76() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-xl font-bold text-gray-500');

	return (
		<View className="flex-wrap gap-6 p-1 bg-purple-50 rounded-3xl border-dashed border-2">
			<View className="size-8 bg-blue-500 rounded-full" />
			<RuntimeView76 styleClassName={layout76.rhythm} />
			<Pressable className="px-6 py-1 bg-purple-500 active:bg-purple-700 rounded-md">
				<Text className="text-xl font-bold text-gray-500" style={resolvedStyle}>{copy76.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy76.detail} / {palette76.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
