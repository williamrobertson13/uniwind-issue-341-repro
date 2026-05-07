import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy104 } from '../generated/copy/copy104';
import { layout104 } from '../generated/layouts/layout104';
import { palette104 } from '../generated/palettes/palette104';

const RuntimeView104 = withUniwind(View);

export function Screen104() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-2xl font-light text-gray-600');

	return (
		<View className="flex-col gap-3 p-6 bg-blue-50 rounded-xl border border-blue-200">
			<View className="size-12 bg-blue-900 rounded-full" />
			<RuntimeView104 styleClassName={layout104.rhythm} />
			<Pressable className="px-7 py-2 bg-purple-600 active:bg-purple-700 rounded-md">
				<Text className="text-2xl font-light text-gray-600" style={resolvedStyle}>{copy104.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy104.detail} / {palette104.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
