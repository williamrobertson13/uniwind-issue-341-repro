import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy928 } from '../generated/copy/copy928';
import { layout928 } from '../generated/layouts/layout928';
import { palette928 } from '../generated/palettes/palette928';

const RuntimeView928 = withUniwind(View);

export function Screen928() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-sm font-normal text-gray-200');

	return (
		<View className="flex-col gap-3 p-6 bg-blue-50 rounded-xl border border-blue-200">
			<View className="size-8 bg-blue-500 rounded-full" />
			<RuntimeView928 styleClassName={layout928.rhythm} />
			<Pressable className="px-3 py-2 bg-purple-200 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-normal text-gray-200" style={resolvedStyle}>{copy928.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy928.detail} / {palette928.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
